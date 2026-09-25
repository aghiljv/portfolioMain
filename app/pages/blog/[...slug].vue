<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()
const routePath = computed(() => withoutTrailingSlash(route.path))

const { data: page } = await useAsyncData(routePath.value, () =>
  queryCollection('blog').path(routePath.value).first()
)
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const { data: surround } = await useAsyncData(`${routePath.value}-surround`, async () => {
  const posts = await queryCollection('blog')
    .select('path', 'title', 'description', 'date')
    .order('date', 'DESC')
    .all()
  const currentIndex = posts.findIndex(post => post.path === routePath.value)

  if (currentIndex === -1) {
    return []
  }

  return [posts[currentIndex - 1], posts[currentIndex + 1]] as unknown as Array<NonNullable<typeof posts[number]>>
})

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogTitle: title
})

if (page.value.image) {
  useSeoMeta({ ogImage: page.value.image })
} else {
  defineOgImage('Portfolio', {
    title,
    description,
    headline: 'Blog'
  })
}

const articleLink = computed(() => `${window?.location}`)

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Custom Prose components mapping to rewrite Markdown image URLs with current origin base URL
const components = {
  img: defineComponent({
    props: {
      src: { type: String, default: '' },
      alt: { type: String, default: '' },
      width: { type: [String, Number], default: undefined },
      height: { type: [String, Number], default: undefined }
    },
    setup(props) {
      const resolvedSrc = computed(() => {
        if (!props.src) return ''
        if (props.src.startsWith('http://') || props.src.startsWith('https://')) {
          return props.src
        }
        const origin = typeof window !== 'undefined' ? window.location.origin : ''
        const cleanSrc = props.src.startsWith('/') ? props.src : `/${props.src}`
        return `${origin}${cleanSrc}`
      })

      return () => h('img', {
        src: resolvedSrc.value,
        alt: props.alt,
        width: props.width,
        height: props.height,
        class: 'rounded-lg max-w-full h-auto mx-auto my-4'
      })
    }
  })
}
</script>

<template>
  <UMain class="mt-20 px-2">
    <UContainer class="relative min-h-screen">
      <UPage v-if="page">
        <ULink
          to="/blog"
          class="text-sm flex items-center gap-1"
        >
          <UIcon name="lucide:chevron-left" />
          Blog
        </ULink>
        <div class="flex flex-col gap-3 mt-8">
          <div class="flex text-xs text-muted items-center justify-center gap-2">
            <span v-if="page.date">
              {{ formatDate(page.date) }}
            </span>
            <span v-if="page.date && page.minRead">
              -
            </span>
            <span v-if="page.minRead">
              {{ page.minRead }} MIN READ
            </span>
          </div>
          <img
            v-if="page.image"
            :src="typeof page.image === 'string' ? page.image : page.image?.src"
            :alt="page.title"
            class="rounded-lg w-full h-[300px] object-cover object-center"
          >
          <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
            {{ page.title }}
          </h1>
          <p class="text-muted text-center max-w-2xl mx-auto">
            {{ page.description }}
          </p>
          <div class="flex items-center justify-center gap-2 mt-2">
            <div
              v-if="page.author"
              class="flex flex-col justify-center items-center text-center gap-2"
            >
              <img
                v-if="page.author.avatar"
                :src="typeof page.author.avatar === 'string' ? page.author.avatar : page.author.avatar?.src"
                :alt="page.author.name"
                class="w-10 h-10 rounded-full object-cover"
              >
              <div class="flex flex-col">
                <span v-if="page.author.name" class="text-sm font-medium">
                  {{ page.author.name }}
                </span>
                <span v-if="page.author.description" class="text-xs text-muted">
                  {{ page.author.description }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-3xl mx-auto mt-8 flex flex-col gap-6">
          <ContentRenderer
            v-if="page.body"
            :value="page"
            :components="components"
          />

          <div class="flex items-center justify-end gap-2 text-sm text-muted">
            <UButton
              size="sm"
              variant="link"
              color="neutral"
              label="Copy link"
              @click="copyToClipboard(articleLink, 'Article link copied to clipboard')"
            />
          </div>
          <UContentSurround :surround />
        </div>
      </UPage>
    </UContainer>
  </UMain>
</template>

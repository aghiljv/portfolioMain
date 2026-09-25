<script setup lang="ts">
const { data: page } = await useAsyncData('blog-page', () => {
  return queryCollection('pages').path('/blog').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
const { data: posts } = await useAsyncData('blogs', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'blogs posts not found',
    fatal: true
  })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

defineOgImage('Portfolio', { title, description })
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :ui="{
        title: 'mx-0! text-left',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    />
    <UPageSection
      :ui="{
        container: 'pt-0!'
      }"
    >
      <div class="flex flex-col gap-8 md:gap-12">
        <Motion
          v-for="(post, index) in posts"
          :key="post.path || index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <NuxtLink
            :to="post.path"
            class="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center overflow-visible"
          >
            <!-- Image Container -->
            <div
              :class="[
                'overflow-visible transition-transform duration-300',
                index % 2 === 0 ? 'sm:-rotate-1' : 'sm:rotate-1'
              ]"
            >
              <img
                v-if="post.image"
                :src="typeof post.image === 'string' ? post.image : post.image?.src"
                :alt="post.title || 'Blog post image'"
                loading="lazy"
                class="w-full h-auto object-cover rounded-lg shadow-lg border-4 border-muted ring-2 ring-default transition-transform duration-300 group-hover:scale-105"
              >
            </div>

            <!-- Content Area -->
            <div class="flex flex-col justify-center space-y-2">
              <time
                v-if="post.date"
                :datetime="post.date"
                class="text-xs  font-medium"
              >
                {{ new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}
              </time>

              <h2 class="text-xl md:text-2xl font-bold tracking-tight  transition-colors">
                {{ post.title }}
              </h2>

              <p
                v-if="post.description"
                class="text-sm md:text-base  line-clamp-2"
              >
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </Motion>
      </div>
    </UPageSection>
  </UPage>
</template>

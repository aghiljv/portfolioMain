<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

interface TestimonialAuthor {
  name?: string
  description?: string
  avatar?: string | { src?: string, alt?: string }
  [key: string]: unknown
}

const requestUrl = useRequestURL()

// Helper to resolve string image paths or avatar objects into a clean, absolute URL
const getAvatarSrc = (avatar?: string | { src?: string }): string => {
  if (!avatar) return ''
  const rawSrc = typeof avatar === 'string' ? avatar : avatar.src || ''
  if (!rawSrc) return ''
  if (rawSrc.startsWith('http://') || rawSrc.startsWith('https://')) {
    return rawSrc
  }
  const cleanSrc = rawSrc.startsWith('/') ? rawSrc : `/${rawSrc}`
  return `${requestUrl.origin}${cleanSrc}`
}
</script>

<template>
  <UPageSection
    :ui="{
      container: 'px-0 pt-0!'
    }"
  >
    <UCarousel
      v-slot="{ item }"
      :items="page.testimonials"
      :autoplay="{ delay: 4000 }"
      loop
      dots
      :ui="{
        viewport: '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)'
      }"
    >
      <UPageCTA
        :description="item.quote"
        variant="naked"
        class="rounded-none"
        :ui="{
          container: 'sm:py-12 lg:py-12 sm:gap-8',
          description: 'text-base! text-balance before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2'
        }"
      >
        <div class="flex items-center justify-center gap-3">
          <img
            v-if="getAvatarSrc((item.author as TestimonialAuthor)?.avatar)"
            :src="getAvatarSrc((item.author as TestimonialAuthor)?.avatar)"
            :alt="(item.author as TestimonialAuthor)?.name || 'Author avatar'"
            class="w-10 h-10 rounded-full object-cover shrink-0"
          >
          <div class="flex flex-col text-left">
            <span v-if="(item.author as TestimonialAuthor)?.name" class="text-sm font-medium">
              {{ (item.author as TestimonialAuthor)?.name }}
            </span>
            <span v-if="(item.author as TestimonialAuthor)?.description" class="text-xs text-muted">
              {{ (item.author as TestimonialAuthor)?.description }}
            </span>
          </div>
        </div>
      </UPageCTA>
    </UCarousel>
  </UPageSection>
</template>

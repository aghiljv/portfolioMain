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

// Helper function to resolve relative image URLs to full absolute URLs with current origin
const resolveImageUrl = (src?: string) => {
  if (!src) return ''
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src
  }
  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const cleanSrc = src.startsWith('/') ? src : `/${src}`
  return `${origin}${cleanSrc}`
}

// Function to format the author object for UUser with resolved avatar image source
const formatAuthor = (author?: TestimonialAuthor) => {
  if (!author) return {}

  const rawAvatarSrc = typeof author.avatar === 'string' ? author.avatar : author.avatar?.src
  const resolvedAvatar = rawAvatarSrc ? resolveImageUrl(rawAvatarSrc) : undefined

  return {
    ...author,
    avatar: resolvedAvatar ? { src: resolvedAvatar, alt: author.name || 'Author avatar' } : author.avatar
  }
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
        <UUser
          v-bind="formatAuthor(item.author)"
          size="xl"
          class="justify-center"
        />
      </UPageCTA>
    </UCarousel>
  </UPageSection>
</template>

<script setup>
const { editor } = defineProps(['editor']);
</script>

<template>
  <div>
    <button
      @click="editor.chain().focus().toggleBold().run()"
      :disabled="!editor.can().chain().toggleBold().run()"
      :class="{ 'is-active': editor.isActive('bold') }"
    >
      Bold
    </button>
    <button
      @click="editor.chain().focus().toggleItalic().run()"
      :disabled="!editor.can().chain().toggleItalic().run()"
      :class="{ 'is-active': editor.isActive('italic') }"
    >
      Italic
    </button>
    <button
      @click="editor.chain().focus().toggleUnderline().run()"
      :disabled="!editor.can().chain().toggleUnderline().run()"
      :class="{ 'is-active': editor.isActive('underline') }"
    >
      Underline
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
    >
      H1
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
    >
      H2
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
    >
      H3
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
    >
      H4
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
    >
      H5
    </button>
    <button
      @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
    >
      H6
    </button>
  </div>
</template>

<style scoped>
@reference "../main.css";

button {
  @apply py-1 px-3 shadow-md rounded-md bg-gray-50
}

button.is-active {
  @apply bg-green-200
}
</style>

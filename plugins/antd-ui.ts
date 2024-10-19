import Antd from "ant-design-vue"

export default defineNuxtPlugin(nuxtApp => {
	// Doing something with nuxtApp
	nuxtApp.vueApp.use(Antd)
})
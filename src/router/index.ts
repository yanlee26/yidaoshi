import Index from '@/views/index'

const routerMap = [
    {
        path: '/',
        component: Index
    }
]

export default routerMap

function getUrl(path) {
    const href = window.location.href
    const i = href.indexOf('#')
    const base = i >= 0 ? href.slice(0, i) : href
    return `${base}#${path}`
}

export const router = {
    push(url: string) {
        window.location.hash = url
    },
    replace(url: string) {
        window.location.replace(getUrl(url))
    },
    go(n: number) {
        window.history.go(n)
    }
}

interface TakeNoteCataLogueItemProps {
    name: string
}

interface TakeNoteCatalogueEditProps {
    onEnter: (value: string) => void
}

export type {
    TakeNoteCataLogueItemProps,
    TakeNoteCatalogueEditProps,
}
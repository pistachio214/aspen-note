interface TakeNoteCataLogueItemProps {
    name: string
}

interface TakeNoteCatalogueEditProps {
    onEnter: (value: string) => void
    onClear: () => void
}

export type {
    TakeNoteCataLogueItemProps,
    TakeNoteCatalogueEditProps,
}
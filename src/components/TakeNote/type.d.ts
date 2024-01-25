interface TakeNoteCataLogueItemProps {
    uuid: string
    name: string
}

interface TakeNoteCatalogueEditProps {
    onEnter: (value: string) => void
    onClear: () => void
}

interface TakeNoteCatalogueMenu {
    uuid: string
    title: string
}

interface TakeNoteItem {
    uuid: string
    title: string
    p_uuid: string
    updated_at: string
    content: string
}

export type {
    TakeNoteCataLogueItemProps,
    TakeNoteCatalogueEditProps,
    TakeNoteCatalogueMenu,
    TakeNoteItem,
}
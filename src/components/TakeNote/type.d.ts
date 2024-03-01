interface TakeNoteCatalogueItemProps {
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

interface TakeNoteSettingProps {
    isOpen: boolean
    onAfterOpen: () => void
    onRequestClose: () => void
    onClose: () => void
}

interface TakeGitBaseic {
    owner: string
    repo: string
    authorization: string
}

export type {
    TakeNoteCatalogueItemProps,
    TakeNoteCatalogueEditProps,
    TakeNoteCatalogueMenu,
    TakeNoteItem,
    TakeNoteSettingProps,
    TakeGitBaseic
}
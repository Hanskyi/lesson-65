export interface IMenuItem {
    title: string,
    content: string
}

export interface IMenuUpdate {
    [category: string]: IMenuItem
}

export interface IMenu {
    [id: string]: string
}
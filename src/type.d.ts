export interface IMenuItem {
    title: string,
    content: string
}

export interface IMenuUpdate {
    [id: string]: IMenuItem
}

export interface IMenu {
    [id: string]: string
}
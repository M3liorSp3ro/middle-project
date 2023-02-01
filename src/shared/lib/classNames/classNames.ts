type Mods = Record<string, boolean | string> // обычный тип объекта но с ограниченными типами значений

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([classNames, value]) => Boolean(value))
            .map(([classNames]) => classNames)
    ]
        .join(' ')
}   
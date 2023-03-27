import React from 'react'

export function mustGetChildId(children: JSX.Element): string {
    const child = React.Children.only(children)

    if ('id' in child.props) {
        return child.props.id
    }

    throw Error('missing /id/ in child props')
}

export function composePrice(
    prefix: string,
    price: number,
    postfix: string
): string {
    return `${prefix}${price}${postfix}`
}

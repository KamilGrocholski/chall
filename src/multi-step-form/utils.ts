import React from 'react'
import { FormData } from './schemes'

export function mustGetChildId(children: JSX.Element): string {
    const child = React.Children.only(children)

    if ('id' in child.props) {
        return child.props.id
    }

    throw Error('missing /id/ in child props')
}

const BILLING_SIGNS = {
    Monthly: 'mo',
    Yearly: 'yr',
} as const

export function composePrice(
    value: number,
    billing: FormData['billing'],
    currencySign: string = '$',
): string {
    return `${currencySign}${value}/${BILLING_SIGNS[billing]}`
}

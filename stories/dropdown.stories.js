import React from 'react'
import { storiesOf } from '@storybook/react'

import Dropdown from '../src/Dropdown'
import FlagIcon from '../src/FlagIcon'


storiesOf('Dropdown', module)
        .add('Flag Dropdown', () => {
            const flags = [
				'flagkm',
				'flagen',
				'flagja',
				'flagko',
				'flagms',
				'flagth',
				'flagmy',
				'flaglo',
				'flagvi',
				'flagid',
				'flagzhTW',
				'flagzhCN'
            ]
            return (
                <Dropdown
                    title={<FlagIcon type="flagkm" size={30}/>}>
                    {flags.map( flag => {
                        return <FlagIcon type={flag} size={50} key={`FagDropDown_${flag}`} style={{display: 'block'}}/>
                    })}
                </Dropdown>
            )
        })
        .add('Text Dropdown', () => {
            const price = [
                { value:'OddsType.DEC',name:'Decimal', id: 'DEC' },
                { value:'OddsType.MY',name:'Malay', id: 'MY' },
                { value:'OddsType.HK',name:'Hongkong', id: 'HK' }
            ]
            return (
                <Dropdown
                    title={'Decimal'}>
                    {price.map( item => {
                        return <span style={{display: 'block'}} key={`TextDropdown_${item.name}`}>{item.name}</span>
                    })}
                </Dropdown>
            )
        })
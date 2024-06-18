import * as stylex from '@stylexjs/stylex'
import { imageLoginStyles } from './styles'
import walppaper from '../../../../../public/login.svg'
import loginText from '../../../../../public/login_text.svg'
import Image from 'next/image'
export const ImageLogin = () => {
    return(
        <div {...stylex.props(imageLoginStyles.base)}>
           <Image src={loginText} style={{width: "100%", height: "20%"}} alt='Logo escrito venha estudar'/>
           <Image src={walppaper} style={{width: "100%", height: "80%"}} alt='Garotos estudando em uma mesa'/>
        </div>
    )
}
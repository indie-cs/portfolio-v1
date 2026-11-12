import { Mail } from 'lucide-react'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

export const email = "meriem.djebbar@outlook.com"
export const socials = [
    {label:'Github', href:'https://github.com/indie-cs', icon: FaGithub},
    {label:'LinkedIn', href:'https://www.linkedin.com/in/meriem-djebbar/', icon: FaLinkedinIn },
    {label:'Instagram', href:'https://www.instagram.com/yurhouse_?obrf=cmNmdTdybHppcGI5', icon: FaInstagram},
    {label:'Email', href:'mailto:${email}', icon: Mail},
    

]
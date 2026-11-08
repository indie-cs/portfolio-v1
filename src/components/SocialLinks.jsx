import { socials } from "../data/socials";

export default function SocialLinks({className=''}){
    return(
        <div className={`flex gap-1.5 ${className}`}>
            {socials.map(({label, href, icon: Icon})=>(
                <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank':undefined}
                rel="noreferrer"
                className="flex size-11 items-center justify-center rounded-xl text-soft transition hover:bg-sage/10 hover:text-sage">
                    <Icon size={18}/>
                </a>
            ))}
        </div>
    )
}
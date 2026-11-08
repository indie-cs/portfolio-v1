import { Code, Folder, House, Icon, Mail, Sparkle, Sparkles, Star, User } from "lucide-react";
import MusicPlayer from "./MusicPlayer";
import SocialLinks from "./SocialLinks";

const links=[
    {label: 'Home', href:'#top', icon: House},
    {label: 'About', href:'#about', icon: User},
    {label: 'Projects', href:'#projects', icon: Folder},
    {label: 'Skills', href:'#skills', icon: Code},
    {label: 'Beyond Code', href:'#beyond', icon: Star},
    {label: 'Contact', href:'#contact', icon: Mail},
]

export default function Sidebar(){
    return(
        <aside className="flex flex-col gap-8 border-b border-line bg-sidebar p-6 md:sticky md:top-0 md:h-screen md:w-60 md:shrink-0 md:border-r md:border-b-0">
            <a href="#top"
            className="flex items-center gap-2 font-serif text-4xl font-medium text-sage">
                Mia <Sparkles size={14} fill="currentColor"/>
            </a>
            <nav aria-label="Main" className="grid grid-cols-2 gap-1.5 md:grid-cols-1">
                {links.map(({label, href, icon:Icon})=>(
                    <a key={label} href={href} className="flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm text-soft transition hover:bg-sage/10 hover:text-sage">
                        <Icon size={18} strokeWidth={1.75}/>
                        {label}
                    </a>
                ))}
            </nav>
            <MusicPlayer title="Lofi Focus" artist="Lofi" src="/audio/lofi-focus.mp3"/>
            <div className="mt-auto flex flex-col gap-3">
                <p className="font-serif text-lg italic text-soft">
                    Let's build something meaningful.
                </p>
                <SocialLinks/>
            </div>
        </aside>
    )
}
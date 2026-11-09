export default function SectionLabel({children}){
    return (
        <div className="flex items-center gap-4 text-xs tracking-[0.22em] text-soft">
            {children}
            <span className="h-px flex-1 bg-line" />
        </div>
    );
}
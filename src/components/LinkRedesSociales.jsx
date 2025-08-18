

export const LinkRedesSociales = ({ href, target, children, color }) => {
    return (
        <a className={` sm:rounded-full ${color} p-5   transform  transition-transform duration-300 w-full hover:bg-neutral-800 hover:scale-110 flex justify-center items-center `}
            href={href}
            target={target}
            rel="noopener noreferrer"
            aria-label="Facebook"

        >
            {children}
        </a>
    )
}

export default LinkRedesSociales

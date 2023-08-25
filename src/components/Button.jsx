export function ButtonMain(props) {
    return (
        <button class="w-full max-w-[460px] rounded-md bg-alt text-white text-lg p-2 font-semibold">
            {props.name}
        </button>
    )
}

export function ButtonAlt(props) {
    return (
        <button class="w-full max-w-[460px] rounded-md bg-stone-400 text-white text-lg p-2 font-semibold">
            {props.name}
        </button>
    )
}

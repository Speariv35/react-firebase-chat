import {useEffect} from "react";

export default function useSmartScroll(ref) {
    const shouldScroll = true
    useEffect(() => {
        if (shouldScroll) {
            const node = ref.current;
            node.scrollTop = node.scrollHeight;
        }
    },)
}


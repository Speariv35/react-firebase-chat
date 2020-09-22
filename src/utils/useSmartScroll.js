import {useEffect} from "react";

export default function useSmartScroll(ref) {
    useEffect(() => {
        const node = ref.current;
        node.scrollTop = node.scrollHeight;
    },)
}


import { useEffect } from "react";

export default function useKeyPress(fn) {
    useEffect(() => {
        window.addEventListener("keypress", fn);
        return () => window.removeEventListener("keypress", fn);
    }, [fn])
}
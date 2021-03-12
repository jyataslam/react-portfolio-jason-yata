import { useEffect } from "react";

function useDarkBody() {
    useEffect(() => {
        document.body.style.backgroundColor = "#000";

        return () => {
            document.body.style.backgroundColor = "#fff";
        };
    });
}

export default useDarkBody;

import style from "./style.module.scss";
import {Flex} from "@chakra-ui/react";

export function Loader({...props}) {
    return (
        <Flex {...props} className={"loader-class"} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
            <div className={style.loader}  ></div>

        </Flex>
    )
}
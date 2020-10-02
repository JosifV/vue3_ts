import { ref } from "vue";

//* 12 konvencija je da ime kuke pocinje sa 'use' - isto kao u reactu
//* 12 hooks mogu primati i argse - kao i sve druge funkcije
export const useExample = (mode:string) => {
    //* 12 sve napises kao i u setup() metodu
    const stringExtension = ref("");
    const hookHandler = () => {
        let strToAppend: string = 'WORK '
        if (mode === 'plural_mode') strToAppend = 'WORKS '

        stringExtension.value += strToAppend;
    };
    return {
        stringExtension,
        hookHandler,
    };
}
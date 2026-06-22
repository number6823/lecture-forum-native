import {  Text, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";
import { StyleSizeType } from "@/types/style";

interface LabelProps extends TextProps {
    size?: StyleSizeType;
}

function Label({ size = "medium", className, children, ...Props }: LabelProps) {
    const LABEL_SIZE_STYLES = {
        small: "text-xs mb-1",
        medium: "text-sm mb-1.5",
        large: "text-base mb-2",
    };

    return (
        <Text
            className={twMerge("font-semibold ml-0.5", LABEL_SIZE_STYLES[size], className)}
            {...Props}>
            {children}
        </Text>
    );
}

export default Label;

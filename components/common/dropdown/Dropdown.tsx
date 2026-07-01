import { ReactNode, useState } from "react";
import { Platform, Pressable, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface DropdownProps {
    trigger: ReactNode;
    children: ReactNode | ((close: () => void) => ReactNode);
    className?: string;
    dropdownClassName?: string;
}

function Dropdown({ trigger, children, className, dropdownClassName }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => setIsOpen(false);

    return (
        <View className={twMerge("relative", "z-50", className)}>
            <Pressable onPress={() => setIsOpen(!isOpen)}>{trigger}</Pressable>

            {isOpen && (
                <>
                    {/* 백드롭 */}
                    <Pressable
                        onPress={close}
                        className={"z-40"}
                        style={
                            Platform.OS === "web"
                                ? {
                                      position: "fixed",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                  }
                                : {
                                      position: "absolute",
                                      top: -1000,
                                      left: -1000,
                                      right: -3000,
                                      bottom: -3000,
                                  }
                        }
                    />

                    {/* 드롭다운 내용 */}
                    <View
                        className={twMerge(
                            // top,left,right,bottom 은 부모 기준
                            // translate는 내가 기준
                            ["absolute", "top-full","right-0"],
                            ["mt-2", "z-50", "min-w-[150px]","shadow-md"],
                            ["bg-background-paper", "border", "border-divider", "rounded-lg"],
                            dropdownClassName,
                        )}>
                        {typeof children === "function" ? children(close) : children}
                    </View>
                </>
            )}
        </View>
    );
}

export default Dropdown;

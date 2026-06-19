import { View } from "react-native";
import { Slot } from "expo-router";
import MainHeader from "@/components/layout/main/MainHeader";
import MainFooter from "@/components/layout/main/MainFooter";

function MainLayout() {
    return (
        <View className={"flex-1"}>
            <MainHeader />
            <View className={"flex-1"}>
                <Slot />
            </View>
            <MainFooter />
        </View>
    );
}
export default MainLayout;

import { useWindowDimensions, View } from "react-native";
import { Slot } from "expo-router";
import MainFooter from "@/components/layout/main/MainFooter";
import MainHeaderMobile from "@/components/layout/main/MainHeaderMobile";
import MainHeaderDesktop from "@/components/layout/main/MainHeaderDesktop";

function MainLayout() {
    const { width } = useWindowDimensions();
    const isMobile = width < 768;

    return (
        <View className={"flex-1"}>
            {isMobile ? <MainHeaderMobile /> : <MainHeaderDesktop />}
            <View className={"flex-1"}>
                <Slot />
            </View>
            <MainFooter />
        </View>
    );
}
export default MainLayout;

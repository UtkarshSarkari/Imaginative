import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon;
    iconColor?: string;
    bgColor?: string;
}

export default function Heading({ title, description, icon: Icon, iconColor, bgColor }: HeadingProps) {
    return (
        <>
            <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8 mt-10">
                <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                    <Icon className={cn("w-10 h-10", iconColor)} />
                </div>
                <div className="">
                    <div className="text-3xl font-semibold">{title}</div>
                    <div className="text-sm text-muted-foreground">{description}</div>
                </div>
            </div>
        </>
    )
}

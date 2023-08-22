"use client"

import Image from 'next/image'
import {DropdownMenu, DropdownItem, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


interface Avatar {
    url: string;
    title: string;
}
  
interface Category {
    [key: string]: Avatar;
}
  
interface Categories {
    Men: Category;
    Animals: Category;
    Women: Category;
}

const CategoryOptions: Categories = {
    Men: {
        BeardManAvatar: {
            url:"https://icons8.com/icon/ETTkPerrIfeL/beard-man-avatar",
            title:"Bearded Man",
        },
        BaldManAvatar: {
            url:"https://icons8.com/icon/ifJsURVvsr7I/bald-man-avatar",
            title:"Bald Man"
        },
        HoodieManAvatar: {
            url:"https://icons8.com/icon/tG80GA2taHMo/man-with-hoodie-avatar",
            title:"Hoodie Man"
        },
        GlassesManAvatar: {
            url:"https://icons8.com/icon/imUXt6njYGho/man-with-glasses-avatar",
            title:"Man with Glasses"
        }
    },
    Animals: {
        CatAvatar: {
            url:"https://icons8.com/icon/nylOkREgUdN5/cat",
            title:"Cat"
        },
        OwlAvatar: {
            url:"https://icons8.com/icon/2a7Q4Dt5XlQy/owl",
            title:"Owl"
        },
        FishAvatar: {
            url:"https://icons8.com/icon/KnuIPFMtk24r/fish",
            title:"Fish"
        },
        GrizzlyAvatar: {
            url:"https://icons8.com/icon/SG5Mhjz8XG03/grizzly",
            title:"Grizzly Bear"
        },
        },
    Women: {
        WomanAvatarOne: {
            url:"https://icons8.com/icon/B7FTUynDCmw2/woman",
            title:"Woman One"
        },
        WomanAvatarTwo: {
            url:'https://icons8.com/icon/rkLGubTly3xy/woman',
            title:'Woman Two'
        },
        WomanAvatarThree: {
            url:'https://icons8.com/icon/izRHWUmohLJo/indian',
            title:'Woman Three'
        },
        WomanAvatarFour: {
            url:'https://icons8.com/icon/GOwRJB3DCAn3/singer',
            title:'Woman Four'
        }
        }
    }

export default function PickAvatar(CategoryOptions) {
    const [position, setPosition] = React.useState("Animals")
 
    return (
        <>
        <div className='flex justify-center'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline">Choose a Category</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Avatar Categories</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                    {CategoryOptions.map((category) => {
                        <DropdownMenuRadioItem value={category}>{category}</DropdownMenuRadioItem>
                    })}
                </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <div className='grid col-span-2'>
            {AvatarOptions.map((avatar) => {
                <Button variant="outline">
                    <Image src={avatar.url} alt={avatar.title} width={100} height={100} />
                    <Label>{avatar.title}</Label>
                </Button>
            })}
        </div>
    </>
    )
}


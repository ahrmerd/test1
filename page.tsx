import { Metadata } from "next"
import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area"
import { Separator } from "@/registry/new-york/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs"

import { AlbumArtwork } from "./components/album-artwork"
import { Menu } from "./components/menu"
import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder"
import { Sidebar } from "./components/sidebar"
import { listenNowAlbums, madeForYouAlbums } from "./data/albums"
import { playlists } from "./data/playlists"

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
}

export default function MusicPage() {
  return (
    <>
     
    </>
  )
}

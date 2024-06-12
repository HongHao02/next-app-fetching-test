import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { User } from "@/app/lib/definition"
import Image from "next/image"

export function SWRCard({user}:{user: User}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.first_name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={user.avatar} width={100} height={100} alt="avatar"></Image>
      </CardContent>
    </Card>
  )
}

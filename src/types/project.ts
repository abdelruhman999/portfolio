import { StaticImport } from "next/dist/shared/lib/get-img-props"

export interface ProjectType{
  image:string | StaticImport
  title:string
  type:string,
  description:string
  link:string
}
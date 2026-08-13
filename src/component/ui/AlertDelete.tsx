import { Trash2Icon } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { MdDelete } from "react-icons/md"
import { toast } from "sonner";

type AlertDialogDestructiveProps = {
  id : number;
};
export function AlertDialogDestructive({  id }: AlertDialogDestructiveProps) {

  function handleDeleteProject() {
            if(id){
               console.log("project id is" , id);
              }
              toast.success("project deleted successfully!")
              
            }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
          <Button
         variant="outline" size="sm" className="glass-light"
         >
          <MdDelete  className=" text-red-400 text-xl" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
            <Trash2Icon />
          </AlertDialogMedia>
          <AlertDialogTitle>Delete chat?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete this chat conversation. View{" "}
            <a href="#">Settings</a> delete any memories saved during this chat.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancel</AlertDialogCancel>
          <AlertDialogAction
           variant="destructive"
           onClick={handleDeleteProject}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

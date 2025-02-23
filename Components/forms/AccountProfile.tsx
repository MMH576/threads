"use client";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    }
    btnTitle: string;
}

const accountProfile = ({user, btnTitle}: Props) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    })
    return (
        <Form>

        </Form>
    )
}

export default accountProfile;


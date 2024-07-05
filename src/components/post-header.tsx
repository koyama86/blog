import { Post } from "@/types/blog";
import { FC } from "react";

type Props = {
    post: Post;
}
const PostHeader: FC<Props> = ([post]) => {
    const dt = new Date(post.created_at);
    const year = dt.getFullYear;
    const month = dt.getMonth;
    const day = dt.getDay;
    return (
        <div className="">
            <div className="">
                <h2 className="">
                    <h3 className="">
                        {/* icon */}
                        <div></div>
                    </h3>
                </h2>
            </div>
        </div>
    );
}
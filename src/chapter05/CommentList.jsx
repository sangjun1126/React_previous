import React from "react";
import Comment from "./Comment";

const comments = [{
    name : '정상준',
    comment : '첫 등록이네요',
},
{
    name : '손흥민',
    comment : '토트넘에서 공격수를 담당하고 있어요'
},
{
    name : '국제 천호 아카데미',
    comment : '1월까지 달려봐요',
},
{
    name : '채정호',
    comment : '나 입시 상담 한놈 전번까라'
}
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    )
}

export default CommentList;
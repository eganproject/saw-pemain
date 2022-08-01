import { Inertia } from "@inertiajs/inertia";


export const PostAPI = (url, data) =>{
  Inertia.post(url, data);
}
export const EditAPI = (url, data) => {
  Inertia.visit(url, {
    method: 'put',
    data: data,
  })
}

export const DeleteAPI = (url, idnya) => {
    Inertia.visit(url, {
        method: 'delete',
        data: {
          id: idnya
        },
      })
}


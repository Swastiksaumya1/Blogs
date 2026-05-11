import React,{useEffect, useState} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate , useParams } from 'react-router-dom'




function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate])
    

    return post ? (
      <div className='py-12 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors min-h-screen'>
          <Container>
              <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 transition-colors">Edit Post</h1>
              <PostForm post={post} />
          </Container>
    </div>
  
  ) : null 
}
export default EditPost
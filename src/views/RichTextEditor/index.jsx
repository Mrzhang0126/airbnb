import { memo, useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import '@wangeditor/editor/dist/css/style.css'

import { EditorWrapper } from './style'

const RichTextEditor = memo(() => {
  const [editor, setEditor] = useState(null)
  const [html, setHtml] = useState('<p>Hello</p>')

  useEffect(() => {
    const timer = setTimeout(() => {
      setHtml('<p>hello&nbsp;<strong>world</strong>.</p>\n<p><br></p>')
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (editor === null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  const toolbarConfig = {}
  const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
      uploadImage: {
        async customUpload(file, insertFn) {  
          console.log('image', file, insertFn)
          // file 即选中的文件
          // 自己实现上传，并得到图片 url alt href
          // 最后插入图片
          // insertFn(url, alt, href)
        }
      },
      uploadVideo: {
        async customUpload(file, insertFn) {
          console.log('video', file, insertFn)
          // file 即选中的文件
          // 自己实现上传，并得到视频 url poster
          // 最后插入视频
          // insertFn(url, poster)
        }
      }
    }
  }

  return (
    <EditorWrapper>
      <Toolbar 
        editor={editor}
        defaultConfig={toolbarConfig}
        mode="default"
        style={{ borderBottom: '1px solid #ccc' }}
      />
      <Editor
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={editor => setHtml(editor.getHtml())}
        mode="default"
        style={{ height: '500px' }}
      />
    </EditorWrapper>
  )
})

export default RichTextEditor
import React, { FC, useRef, useEffect } from 'react'
import { Paper } from '@material-ui/core'
import 'tui-editor/dist/tui-editor.min.css'
import 'tui-editor/dist/tui-editor-contents.min.css'
import 'codemirror/lib/codemirror.css'
import 'tui-chart/dist/tui-chart.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import { Editor } from '@toast-ui/react-editor'
import umlPlugin from '@toast-ui/editor-plugin-uml'
import tableMergedCellPlugin from '@toast-ui/editor-plugin-table-merged-cell'
import chartPlugin from '@toast-ui/editor-plugin-chart'
import colorSyntaxPlugin from '@toast-ui/editor-plugin-color-syntax'
import embededPlugin from 'src/shared/editor-plugin-embeded'
import useStyles from './styles'

const PostConfig: FC = () => {
  const classes = useStyles()
  const editorRef = useRef<Editor>(null)

  const foo = () => {
    if (editorRef.current) {
      const editorEl = editorRef.current
      const toolbar = editorEl.getInstance().getUI().getToolbar()

      //@ts-ignore
      editorEl.editorInst.eventManager.addEventType('uploadImg')
      //@ts-ignore
      editorEl.editorInst.eventManager.listen('uploadImg', function () {
        alert('Click!')
      })

      toolbar.insertItem(16, {
        type: 'button',
        options: {
          className: 'tui-image',
          event: 'uploadImg',
          tooltip: 'Insert Image',
        },
      })
    }
  }

  useEffect(() => {
    foo()
  }, [])

  return (
    <Paper className={classes.editorWrapper}>
      <Editor
        hideModeSwitch={true}
        useCommandShortcut={true}
        usageStatistics={false}
        initialValue=""
        previewStyle="vertical"
        height="100%"
        initialEditType="markdown"
        toolbarItems={[
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          // 'image',
          'link',
          'divider',
          'code',
          'codeblock',
        ]}
        plugins={[
          chartPlugin,
          tableMergedCellPlugin,
          umlPlugin,
          colorSyntaxPlugin,
          embededPlugin,
        ]}
        ref={editorRef}
      />
    </Paper>
  )
}

export default PostConfig

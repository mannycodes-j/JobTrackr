'use client'

import type React from 'react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FileText, Upload } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import styles from '@/styles/animations.module.css'

interface ResumeUploaderProps {
  onUpload: (text: string) => void
}

export function ResumeUploader({ onUpload }: ResumeUploaderProps) {
  const [resumeText, setResumeText] = useState('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      // In a real app, you would parse the file content
      // For this demo, we'll just pretend we extracted text
      setResumeText('Sample resume content extracted from ' + file.name)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      setFileName(file.name)
      setResumeText('Sample resume content extracted from ' + file.name)
    }
  }

  const handleSubmit = () => {
    if (resumeText.trim()) {
      onUpload(resumeText)
    }
  }

  return (
    <Card className={styles.fadeIn}>
      <CardHeader>
        <CardTitle>Upload Your Resume</CardTitle>
        <CardDescription>
          Upload your resume to get AI-powered feedback and suggestions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={cn(
            'flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors',
            isDragging
              ? 'border-primary bg-primary/5'
              : 'border-muted-foreground/20'
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FileText className="mb-2 h-10 w-10 text-muted-foreground" />
          <p className="mb-1 text-sm font-medium">Drag and drop your resume</p>
          <p className="mb-4 text-xs text-muted-foreground">
            Supports PDF, DOCX, or TXT files up to 5MB
          </p>
          <Input
            type="file"
            id="resume-upload"
            className="hidden"
            accept=".pdf,.docx,.txt"
            onChange={handleFileChange}
          />
          <Button
            variant="outline"
            size="sm"
            asChild
            className={styles.buttonHover}
          >
            <label htmlFor="resume-upload" className="cursor-pointer">
              <Upload className="mr-2 h-4 w-4" />
              Browse Files
            </label>
          </Button>
        </div>

        {fileName && (
          <div className="rounded-lg bg-muted p-3">
            <p className="text-sm font-medium">Selected file:</p>
            <p className="text-sm text-muted-foreground">{fileName}</p>
          </div>
        )}

        <div>
          <p className="mb-2 text-sm font-medium">Or paste your resume text:</p>
          <Textarea
            placeholder="Paste your resume content here..."
            className="min-h-[200px]"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          disabled={!resumeText.trim()}
          className={styles.buttonHover}
        >
          Get Feedback
        </Button>
      </CardFooter>
    </Card>
  )
}

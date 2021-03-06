import { FC, ReactNode } from 'react'
import Box from 'components/box'
import { title } from 'process'
import { useRouter } from 'next/router'

interface Props {
  children?: ReactNode,
  title?: string,
  subtitle?: string
  description?: string
  link?: string
  maxWidth?: number
}

const Container: FC<Props> = ({
  children,
  title,
  subtitle,
  description,
  link,
  maxWidth
}: Props) => {
  const router = useRouter();
  return <>
    <Box 
      bg="background-alt" 
      fg="foreground" 
      boxShadow="0px 3px 4px #10101030"
      p={{ x: 24, y: 36}} 
      onClick={() => link && router.push(link)}
      cursor={link ? 'pointer' : 'auto'}
      maxWidth={maxWidth}
    >
      {title ? <h3> {title} </h3> : ''}
      {subtitle ? <h4> {subtitle} </h4> : ''}
      {description ? <p> {description} </p> : ''}
      {children}
    </Box>
  </>
}

export default Container
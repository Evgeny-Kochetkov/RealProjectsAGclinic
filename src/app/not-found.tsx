import type { Metadata } from 'next'

import { NotFound } from "@/components/common/notFound"

import React from 'react'

export const metadata: Metadata = {
	title: 'Страница не найдена'
}

const NotFoundPage = () => <NotFound/>

export default NotFoundPage
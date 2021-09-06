import createFile from './createFile'
import deleteFile from './deleteFile'
import readDir from './readDir'
import selectFile from './selectFile'
import updateDir from './updateDir'
import updateFile from './updateFile'
import { writable } from "svelte/store"

const initStoreObj = {
  directory: null,
  selectedFile: null
}

export const fileStore = writable(initStoreObj)

export const readDirectory = async (notify) => await readDir(fileStore, notify)

export const updateDirectory = async (payload, notify) => await updateDir(payload, notify)

export const selectedFile = {
  set: (dir, fileId, markDownContent, toc) => {
    selectFile.reset(fileStore)
    selectFile.set(fileStore, dir, fileId, markDownContent, toc)
  },
  reset: () => selectFile.reset(fileStore)
}

export const createDocument = async (payload) => await createFile(payload)
export const deleteDocument = async (payload) => await deleteFile(payload)
export const updateDocument = async (payload) => await updateFile(payload)

import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Book } from '~/Models'
import { $axios } from '~/utils/nuxt-instance'

interface Show {
  id: Book['id']             // forma de acessar chave
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.books
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  @Action
  public async index() {
    const books = await $axios.$get('/books')
    this.context.commit('SET_ALL', books)
  }

  @Action
  public async show(payload: Show) {
    const book = await $axios.$get(`./books/${payload.id}`)
    this.context.commit('SET_SINGLE', book)
  }
}

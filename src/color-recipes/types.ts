export namespace ColorRecipes {
  export enum Technique {
    AIR_BRUSH,
    BASE_COAT,
    DRY_BRUSH,
    LAYER,
    WASH
  }

  export enum Brands {
    AK = 'AK Interactive',
    CITADEL = 'Citadel Color',

  }

  export type Paint = {
    brand: string
    colorName: string
  }

  export type Step = {
    isComplete: boolean
    paintUsed: Paint
    techniqueUsed: Technique
  }

  export type Steps = Step[]

  export type Recipe = {
    name: string
    steps: Steps
  }
}

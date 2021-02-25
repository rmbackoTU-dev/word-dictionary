var fs=require('fs');

function Word(name, syntaxType, definition)
{
    this.name=name;
    this.syntaxType=syntaxType;
    this.definition=definition;
}

function Dictionary(name)
{
    this.dictionaryName=name;
    this.data=new Array();

    /**
    * returns false if word is not found in dictionary returns 
    * true otherwise
    * @param {Object(Word), String} aWord 
    */
    this.wordExists=function(aWord)
    {
        let wordType=typeOf(aWord);
        let searchWord="";
        let found= false;
        if(wordType === 'string')
        {
            searchWord=aWord;
            let currentWord;
            for(let i=0; i< this.data.length; i++)
            {
                currentWord=this.data[i];
                if(currentWord === searchWord)
                {
                    found=true;
                }
            }
        }
        else if(wordType === 'Object')
        {
            if( aWord instanceof Word)
            {
                searchWord=aWord.wordName;
                let currentWord;
                for(let i=0; i< this.data.length; i++)
                {
                    currentWord=this.data[i];
                    if(currentWord === searchWord)
                    {
                        found=true;
                    }
                }
            }
            else
            {
                return Error("word must be a string or a word object");
            }
        }
        else
        {
            return Error("word must be a string or a word object");
        }
        return found;
    }

    /**
     * Factory method to create a new. Checks the existance of the word before create
     * otherwise this method modifies an existing word
     * @param {string} word 
     * @param {string} type 
     * @param {string} definition 
     */
    this.wordFactory= function(word, syntaxType, definition)
    {
        let wordType=typeOf(word);
        let syntaxTypeType=typeOf(syntaxType);
        let definition=typeOf(definition);
        let newWord=null;
        if(!( wordType === 'string') || !(syntaxTypeType === 'string')
        ||!(definition === 'string'))
        {
            return Error("One of the parameters is not a string");
        }
        else
        {
            if(this.findWord(word))
            {
                //retrieve an existing word and append it
                try
                {
                    let wordIndex=this.retrieveWord(word);
                    newWord=this.data[wordIndex];

                }
                catch(error)
                {
                    return Error("An error occured while creating your word");
                }
            }
            else
            {
                //create a new word from scratch
                newWord=new Word(word, syntaxType, definition);
            }
        }
        return newWord;
    }

    /**
     * Search data for the word name return the word object
     * if not found return -1
     * @param {string} wordName 
     */
    this.retrieveWord=function(wordName)
    {
        let found=false;
        let currentWord='';
        let currentIndex=-1;
        if(typeOf(wordName) !== "string")
        {
            return Error("Expected a string for word name");
        }
        else
        {
            let i=0;
            while(!(found) && (i<this.data.length))
            {
                currentWord=this.data[i];
                if(currentWord === wordName)
                {
                    currentIndex=i;
                    found=true;
                }
                else
                {
                    i++;
                }
            }
        }
        return currentIndex;
    }

    /**
     * Add Word adds a word to the dictionary
     * @param {Object (word)} aWord
     */
    

     /**
      * Delete Word removes a word from the dictionary
      * and all of its variant definitions
      * @param {Object (word)} aWord
      */

      /**
       * Remove Definition removes a definition from a word in the dictionary
       * @param {Object (word)} aWord
       * @param {number} defintionIndex
       */

       /**
        * Edit Definition changes the definition of a word in the dictionary
        * @param {Object (word)} aWord
        * @param {number} defintionIndex
        */

        /**
        * Edit Word Name changes the word name of a word in the dictionary
        * @param {Object (word)} aWord
        * @param {string} aWordName
        */

        /**
         * Writes Dictionary and its words/definitions to a .json file
         */

         /**
          * Reads a Dictionary and its  word/definitions from a .json file
          */
}








